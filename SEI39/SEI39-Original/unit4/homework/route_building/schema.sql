CREATE SEQUENCE IF NOT EXISTS players_id_seq;

CREATE TABLE "public"."players" (
    "id" int4 NOT NULL DEFAULT nextval('players_id_seq'::regclass),
    "name" varchar(50),
    "position" varchar(2),
    "salary" int4,
    "team_id" int4,
    PRIMARY KEY ("id")
);