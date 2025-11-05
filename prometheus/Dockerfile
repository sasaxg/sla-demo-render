FROM prom/prometheus:v2.47.0
COPY prometheus.yml /etc/prometheus/prometheus.yml
COPY alert.rules.yml /etc/prometheus/alert.rules.yml
CMD ["--config.file=/etc/prometheus/prometheus.yml", "--storage.tsdb.retention.time=7d"]