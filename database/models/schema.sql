--CREATE DATABASE

DROP DATABASE IF EXISTS kanaapi;

CREATE DATABASE kanaapi
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


--DROP TABLES

DROP TABLE IF EXISTS kana;
DROP TABLE IF EXISTS users;

--CREATE USER TABLE

CREATE TABLE "users"("id" TEXT NOT NULL);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");

--CREATE TABLE KANA

CREATE TABLE "kana"(
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "kana" TEXT NOT NULL,
    "roma" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,
    "repitition" INTEGER NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL,
    "next" INTEGER NOT NULL
);
ALTER TABLE
    "kana" ADD PRIMARY KEY("id");

ALTER TABLE
    "kana" ADD CONSTRAINT "kana_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");