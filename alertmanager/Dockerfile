FROM prom/alertmanager:v0.26.0
USER root
RUN apk add --no-cache gettext
COPY alertmanager.yml.tmpl /etc/alertmanager/alertmanager.yml.tmpl
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["--config.file=/etc/alertmanager/alertmanager.yml"]