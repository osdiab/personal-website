ARG PG_MAJOR

FROM postgres:${PG_MAJOR}

WORKDIR /app

RUN apt-get update && apt-get install -y wget

# Download the pre-built binary from GitHub releases
RUN if [ "$(dpkg --print-architecture)" = "amd64" ]; then \
  wget https://github.com/pksunkara/pgx_ulid/releases/download/v0.1.1/pgx_ulid-v0.1.1-pg15-amd64-linux-gnu.deb; \
  else \
  wget https://github.com/pksunkara/pgx_ulid/releases/download/v0.1.1/pgx_ulid-v0.1.1-pg15-arm64-linux-gnu.deb; \
  fi

# Install the binary using dpkg
RUN dpkg -i pgx_ulid-v0.1.1-pg15-*-linux-gnu.deb

# Cleanup the .deb file
RUN rm pgx_ulid-v0.1.1-pg15-*-linux-gnu.deb

# Reset the Docker image's command back to the original entrypoint script
CMD ["postgres"]
