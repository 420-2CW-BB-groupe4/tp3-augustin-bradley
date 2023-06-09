CREATE USER RESTSCOTT IDENTIFIED BY oracle DEFAULT TABLESPACE
users QUOTA UNLIMITED ON users;

GRANT CREATE SESSION, CREATE TABLE, CREATE PROCEDURE,
CREATE VIEW, CREATE SEQUENCE, CREATE TRIGGER,
COMMENT ANY TABLE TO RESTSCOTT;

grant dba to restscott;