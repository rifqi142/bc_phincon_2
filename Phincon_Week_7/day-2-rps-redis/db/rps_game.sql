/*
 Navicat Premium Data Transfer

 Source Server         : postgre_server
 Source Server Type    : PostgreSQL
 Source Server Version : 110022
 Source Host           : localhost:5432
 Source Catalog        : rps_game
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110022
 File Encoding         : 65001

 Date: 22/10/2024 22:11:03
*/


-- ----------------------------
-- Sequence structure for matches_mc_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."matches_mc_id_seq";
CREATE SEQUENCE "public"."matches_mc_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tokens_tkn_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tokens_tkn_id_seq";
CREATE SEQUENCE "public"."tokens_tkn_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_us_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_us_id_seq";
CREATE SEQUENCE "public"."users_us_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS "public"."SequelizeMeta";
CREATE TABLE "public"."SequelizeMeta" (
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------
INSERT INTO "public"."SequelizeMeta" VALUES ('20241022040938-create-user.js');
INSERT INTO "public"."SequelizeMeta" VALUES ('20241022044347-create-token.js');
INSERT INTO "public"."SequelizeMeta" VALUES ('20241022063824-create-match.js');

-- ----------------------------
-- Table structure for matches
-- ----------------------------
DROP TABLE IF EXISTS "public"."matches";
CREATE TABLE "public"."matches" (
  "mc_id" int4 NOT NULL DEFAULT nextval('matches_mc_id_seq'::regclass),
  "mc_player_one" int4 NOT NULL,
  "mc_player_one_value" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "mc_player_two" int4,
  "mc_player_two_value" varchar(255) COLLATE "pg_catalog"."default",
  "mc_active" bool NOT NULL DEFAULT true,
  "mc_winner" int4,
  "mc_created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "mc_updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of matches
-- ----------------------------
INSERT INTO "public"."matches" VALUES (1, 3, 'rock', 4, 'rock', 'f', NULL, '2024-10-22 16:09:45.484+07', '2024-10-22 16:34:58.889+07');
INSERT INTO "public"."matches" VALUES (2, 3, 'rock', 4, 'paper', 'f', 4, '2024-10-22 16:36:15.713+07', '2024-10-22 16:36:55.931+07');

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS "public"."tokens";
CREATE TABLE "public"."tokens" (
  "tkn_id" int4 NOT NULL DEFAULT nextval('tokens_tkn_id_seq'::regclass),
  "tkn_type" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tkn_value" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tkn_description" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tkn_us_id" int4 NOT NULL,
  "tkn_expired_on" timestamptz(6) NOT NULL,
  "tkn_is_active" bool NOT NULL,
  "tkn_created_at" timestamptz(6) NOT NULL,
  "tkn_updated_at" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of tokens
-- ----------------------------
INSERT INTO "public"."tokens" VALUES (1, 'REGISTER_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6MywidXNfZW1haWwiOiJyaXpreXVraUBnbWFpbC5jb20iLCJuYW1lIjoiUml6a3kgVWtpIEluZHJpIiwidXNfaXNfYWN0aXZlIjp0cnVlLCJpYXQiOjE3Mjk1ODgxNjMsImV4cCI6MTcyOTU5MTc2M30.2SeKEaVPpsUFoBFWLotvF9204wGmENhWgZzz3utDL4g', 'Successfully created token for user rizkyuki@gmail.com', 3, '2024-10-22 17:09:23.278+07', 't', '2024-10-22 16:09:23.278+07', '2024-10-22 16:09:23.278+07');
INSERT INTO "public"."tokens" VALUES (2, 'LOGIN_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6MywidXNfZW1haWwiOiJyaXpreXVraUBnbWFpbC5jb20iLCJuYW1lIjoiUml6a3kgVWtpIEluZHJpIiwidXNfaXNfYWN0aXZlIjp0cnVlLCJpYXQiOjE3Mjk1ODgxNzAsImV4cCI6MTcyOTU5MTc3MH0.-wUin4V5G-BZf3oG6-gqlwFL5wivlWi7FVYm3Ub8N7o', 'Successfully created token for user rizkyuki@gmail.com', 3, '2024-10-22 17:09:30.085+07', 'f', '2024-10-22 16:09:30.085+07', '2024-10-22 16:09:30.085+07');
INSERT INTO "public"."tokens" VALUES (3, 'REGISTER_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6NCwidXNfZW1haWwiOiJtdWhhbGlAZ21haWwuY29tIiwibmFtZSI6Ik11aGFtbWFkIEFsaSIsInVzX2lzX2FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNzI5NTg5NDQ1LCJleHAiOjE3Mjk1OTMwNDV9.LPEK0SJhKY2MycL80I63UKer0e91fMFxR1D5pAW5JFE', 'Successfully created token for user muhali@gmail.com', 4, '2024-10-22 17:30:45.674+07', 't', '2024-10-22 16:30:45.674+07', '2024-10-22 16:30:45.674+07');
INSERT INTO "public"."tokens" VALUES (4, 'LOGIN_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6NCwidXNfZW1haWwiOiJtdWhhbGlAZ21haWwuY29tIiwibmFtZSI6Ik11aGFtbWFkIEFsaSIsInVzX2lzX2FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNzI5NTg5NDY2LCJleHAiOjE3Mjk1OTMwNjZ9.x2yhUGgKovwGCUfC4kZCNLdH6ZgJjZk6d7J53SkWX8g', 'Successfully created token for user muhali@gmail.com', 4, '2024-10-22 17:31:06.315+07', 'f', '2024-10-22 16:31:06.315+07', '2024-10-22 16:31:06.315+07');
INSERT INTO "public"."tokens" VALUES (5, 'LOGIN_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6MywidXNfZW1haWwiOiJyaXpreXVraUBnbWFpbC5jb20iLCJuYW1lIjoiUml6a3kgVWtpIEluZHJpIiwidXNfaXNfYWN0aXZlIjp0cnVlLCJpYXQiOjE3Mjk1ODk3NjMsImV4cCI6MTcyOTU5MzM2M30.ocn1ZAdpyKhjtoxVHaZgCet30eZBA_icK_9qE1kerKA', 'Successfully created token for user rizkyuki@gmail.com', 3, '2024-10-22 17:36:03.074+07', 'f', '2024-10-22 16:36:03.074+07', '2024-10-22 16:36:03.074+07');
INSERT INTO "public"."tokens" VALUES (6, 'LOGIN_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6NCwidXNfZW1haWwiOiJtdWhhbGlAZ21haWwuY29tIiwibmFtZSI6Ik11aGFtbWFkIEFsaSIsInVzX2lzX2FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNzI5NTg5Nzk1LCJleHAiOjE3Mjk1OTMzOTV9.ZInlwg5aITsQcqal_CtSCY95OGxLaPjY4jPTcNxvEkA', 'Successfully created token for user muhali@gmail.com', 4, '2024-10-22 17:36:35.039+07', 't', '2024-10-22 16:36:35.039+07', '2024-10-22 16:36:35.039+07');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "us_id" int4 NOT NULL DEFAULT nextval('users_us_id_seq'::regclass),
  "us_fullname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "us_username" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "us_email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "us_password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "us_phone_number" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "us_is_active" bool NOT NULL DEFAULT true,
  "us_created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "us_updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES (1, 'Muh Rifqi', 'rifqi142', 'rifqi@gmail.com', '123456', '08561245778', 't', '2024-10-22 16:09:04.073852+07', '2024-10-22 16:09:04.073852+07');
INSERT INTO "public"."users" VALUES (2, 'Dandi Pram', 'dandi123', 'dandi@gmail.com', 'dandi456', '08855661885', 't', '2024-10-22 16:09:04.073852+07', '2024-10-22 16:09:04.073852+07');
INSERT INTO "public"."users" VALUES (3, 'Rizky Uki Indri', 'rizkyuki', 'rizkyuki@gmail.com', '$2b$10$o0pksAGZ8Gop/wZK3CYJz.DmOFv3kczL.ucCa7eaJ60iXZKUo5FmS', '08822115544', 't', '2024-10-22 16:09:23.195+07', '2024-10-22 16:09:23.195+07');
INSERT INTO "public"."users" VALUES (4, 'Muhammad Ali', 'muhali', 'muhali@gmail.com', '$2b$10$Yh2DiTXH32/zS/tXXkkYnet.HaZKbGMaDby2wyw/D6vj1qlrU3Yzu', '0882115445', 't', '2024-10-22 16:30:45.588+07', '2024-10-22 16:30:45.588+07');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."matches_mc_id_seq"
OWNED BY "public"."matches"."mc_id";
SELECT setval('"public"."matches_mc_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tokens_tkn_id_seq"
OWNED BY "public"."tokens"."tkn_id";
SELECT setval('"public"."tokens_tkn_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_us_id_seq"
OWNED BY "public"."users"."us_id";
SELECT setval('"public"."users_us_id_seq"', 5, true);

-- ----------------------------
-- Primary Key structure for table SequelizeMeta
-- ----------------------------
ALTER TABLE "public"."SequelizeMeta" ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name");

-- ----------------------------
-- Primary Key structure for table matches
-- ----------------------------
ALTER TABLE "public"."matches" ADD CONSTRAINT "matches_pkey" PRIMARY KEY ("mc_id");

-- ----------------------------
-- Primary Key structure for table tokens
-- ----------------------------
ALTER TABLE "public"."tokens" ADD CONSTRAINT "tokens_pkey" PRIMARY KEY ("tkn_id");

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_us_username_key" UNIQUE ("us_username");
ALTER TABLE "public"."users" ADD CONSTRAINT "users_us_email_key" UNIQUE ("us_email");
ALTER TABLE "public"."users" ADD CONSTRAINT "users_us_phone_number_key" UNIQUE ("us_phone_number");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("us_id");

-- ----------------------------
-- Foreign Keys structure for table matches
-- ----------------------------
ALTER TABLE "public"."matches" ADD CONSTRAINT "matches_mc_player_one_fkey" FOREIGN KEY ("mc_player_one") REFERENCES "public"."users" ("us_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."matches" ADD CONSTRAINT "matches_mc_player_two_fkey" FOREIGN KEY ("mc_player_two") REFERENCES "public"."users" ("us_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."matches" ADD CONSTRAINT "matches_mc_winner_fkey" FOREIGN KEY ("mc_winner") REFERENCES "public"."users" ("us_id") ON DELETE SET NULL ON UPDATE CASCADE;
