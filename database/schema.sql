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

DROP TABLE IF EXISTS hiragana;
DROP TABLE IF EXISTS katakana;
DROP TABLE IF EXISTS users;

--CREATE USER TABLE

CREATE TABLE "users"("id" TEXT NOT NULL);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");

--CREATE TABLE HIRAGANA

CREATE TABLE "hiragana"(
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "hiragana" TEXT NOT NULL,
    "romaji" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,
    "repitition" INTEGER NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL
);
ALTER TABLE
    "hiragana" ADD PRIMARY KEY("id");

ALTER TABLE
    "hiragana" ADD CONSTRAINT "hiragana_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");

CREATE INDEX
    hiragana_repitition_index ON hiragana (repitition);

--CREATE TABLE KATAKANA

CREATE TABLE "katakana"(
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "katakana" TEXT NOT NULL,
    "romaji" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,
    "repitition" INTEGER NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL
);
ALTER TABLE
    "katakana" ADD PRIMARY KEY("id");

ALTER TABLE
    "katakana" ADD CONSTRAINT "katakana_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");

CREATE INDEX
    katakana_repitition_index ON katakana (repitition);