FROM hayd/alpine-deno

EXPOSE 8888
WORKDIR /app
USER deno
COPY . .
RUN deno cache app.ts

CMD ["run", "--allow-net", "app.ts"]
