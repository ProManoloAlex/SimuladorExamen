# Utiliza la imagen base de PHP 8.2 con Apache que coincida lo más posible con tu versión de XAMPP
FROM php:8.2-apache

# Establece el directorio de trabajo dentro del contenedor, que es donde Apache sirve los archivos.
WORKDIR /var/www/html

# Añade una variable de entorno "cache-buster" para forzar la reconstrucción de esta capa y las siguientes.
# Es útil para asegurar que los cambios en los archivos locales se copien al contenedor.
ARG CACHE_BUST=1

# Elimina el index.html por defecto de Apache si existe, para que no interfiera.
# Esto es una buena práctica.
RUN rm -f /var/www/html/index.html

# Copia todo el contenido de tu proyecto al directorio de trabajo del contenedor.
COPY . /var/www/html/

# Asegura que Apache (el usuario www-data) pueda leer y ejecutar los archivos correctamente.
# Esto soluciona problemas de permisos (error 403 "Prohibido").
RUN chown -R www-data:www-data /var/www/html/
RUN chmod -R 755 /var/www/html/

# Configuración explícita de DirectoryIndex y opciones de directorio para Apache.
# Esto garantiza que Apache busque "index.php" como el archivo principal.
RUN echo '<Directory /var/www/html/>' > /etc/apache2/conf-available/custom-php.conf && \
    echo '    DirectoryIndex index.php index.html' >> /etc/apache2/conf-available/custom-php.conf && \
    echo '    Options Indexes FollowSymLinks' >> /etc/apache2/conf-available/custom-php.conf && \
    echo '    AllowOverride All' >> /etc/apache2/conf-available/custom-php.conf && \
    echo '    Require all granted' >> /etc/apache2/conf-available/custom-php.conf && \
    echo '</Directory>' >> /etc/apache2/conf-available/custom-php.conf && \
    a2enconf custom-php

# Opcional: Habilitar el módulo rewrite si tu aplicación usa .htaccess para URLs amigables.
# Descomenta la siguiente línea si lo necesitas:
RUN a2enmod rewrite

# Opcional: Si tu aplicación necesita otras extensiones de PHP que no vienen por defecto.
# Ejemplo para la extensión mysqli (común para MySQL):
# RUN docker-php-ext-install mysqli pdo pdo_mysql

# Opcional: Si necesitas configurar un php.ini específico.
# COPY tu_php.ini /usr/local/etc/php/conf.d/tu_php.ini # Comúnmente se pone en conf.d

# Exponer el puerto 80 del contenedor (puerto por defecto para HTTP de Apache).
EXPOSE 80

# El comando por defecto ya está configurado para Apache en la imagen base (apache2-foreground).
# No necesitas añadir 'CMD ["apache2-foreground"]' a menos que quieras sobrescribir el comando predeterminado
# de la imagen base. En este caso, la imagen `php:8.2-apache` ya lo tiene configurado para iniciar Apache.
# Así que, puedes dejarlo COMENTADO o NO INCLUIRLO.
# CMD ["apache2-foreground"]