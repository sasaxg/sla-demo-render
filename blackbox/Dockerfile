FROM prom/blackbox-exporter:v0.24.0
COPY ./blackbox/blackbox.yml /etc/blackbox_exporter/config.yml
EXPOSE 9115
CMD ["--config.file=/etc/blackbox_exporter/config.yml"]

