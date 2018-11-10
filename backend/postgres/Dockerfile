FROM postgres:11.0-alpine

# ENV POSTGRES_USER admin
# ENV POSTGRES_DB ameliorate-docker
# ENV POSTGRES_HOST postgres

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/