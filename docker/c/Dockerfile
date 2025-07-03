FROM gcc:12.1.0
WORKDIR /app
COPY run.c .
RUN gcc run.c -o run.out
ENTRYPOINT ["./run.out"]
