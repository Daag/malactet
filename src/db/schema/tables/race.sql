USE malactet;

CREATE TABLE race (
    id                      BIGINT          PRIMARY KEY,
    name                    NVARCHAR(50)    NOT NULL,
    quote                   NVARCHAR(1000)  NOT NULL,
    quote_source            NVARCHAR(100)   NOT NULL,
    short_description       NVARCHAR(1000)  NOT NULL,
    trait_description       NVARCHAR(500)   NOT NULL
);