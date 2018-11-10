BEGIN TRANSACTION;

CREATE TABLE stats (
    -- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
    userid INT REFERENCES users(id),
    entrydte TIMESTAMP NOT NULL,
    waterintake INT,
    weightpounds INT,
    sleepamount INT,
    sleepquality INT CHECK (sleepQuality=NULL OR sleepAmount IS NOT NULL),
    exercisetype VARCHAR(50),
    exerciselength INT CHECK (exerciseLength=NULL OR exerciseType IS NOT NULL),
    exerciseintensity INT CHECK (exerciseIntensity=NULL OR exerciseType IS NOT NULL),
    overallfeeling INT
);

COMMIT;

-- CHECK ( OnSite=0 or ClientId is not null)


--  or... 


-- CREATE TABLE dbo.MyTable (
--     OnSite BIT NOT NULL,
--     ClientID INT NULL);
-- ALTER TABLE dbo.MyTable WITH CHECK ADD CONSTRAINT CK_MyTable_ClientId_NotNull CHECK (OnSite=0 OR ClientId IS NOT NULL);
-- ALTER TABLE dbo.MyTable CHECK CONSTRAINT CK_MyTable_ClientId_NotNull;