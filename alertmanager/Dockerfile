FROM prom/alertmanager:v0.26.0
COPY ./alertmanager/alertmanager.yml /etc/alertmanager/alertmanager.yml
EXPOSE 9093
CMD ["--config.file=/etc/alertmanager/alertmanager.yml"]
