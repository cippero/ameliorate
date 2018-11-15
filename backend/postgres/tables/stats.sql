BEGIN TRANSACTION;

CREATE TABLE stats (
    -- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
    entryid SERIAL,
    userid INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    entrydate TIMESTAMP NOT NULL,
    waterintake INT,
    weightpounds INT,
    sleepamount INT,
    sleepquality INT, --CHECK (sleepquality=NULL OR sleepamount IS NOT NULL),
    exercisetype VARCHAR(50),
    exerciselength INT, -- CHECK (exerciselength=NULL OR exercisetype IS NOT NULL),
    exerciseintensity INT, -- CHECK (exerciseintensity=NULL OR exercisetype IS NOT NULL),
    overallfeeling INT,
    PRIMARY KEY (entryid,userid)
);

COMMIT;

-- CHECK ( OnSite=0 or ClientId is not null)


--  or... 


-- CREATE TABLE dbo.MyTable (
--     OnSite BIT NOT NULL,
--     ClientID INT NULL);
-- ALTER TABLE dbo.MyTable WITH CHECK ADD CONSTRAINT CK_MyTable_ClientId_NotNull CHECK (OnSite=0 OR ClientId IS NOT NULL);
-- ALTER TABLE dbo.MyTable CHECK CONSTRAINT CK_MyTable_ClientId_NotNull;