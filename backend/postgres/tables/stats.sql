BEGIN TRANSACTION;

CREATE TABLE stats (
    -- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
    userId INT REFERENCES users(id),
    entryDate TIMESTAMP NOT NULL,
    waterIntake INT,
    weightPounds INT,
    sleepAmount INT,
    sleepQuality INT CHECK (sleepQuality=NULL OR sleepAmount IS NOT NULL),
    exerciseType VARCHAR(50),
    exerciseLength INT CHECK (exerciseLength=NULL OR exerciseType IS NOT NULL),
    exerciseIntensity INT CHECK (exerciseIntensity=NULL OR exerciseType IS NOT NULL),
    overallFeeling INT
);

COMMIT;

-- CHECK ( OnSite=0 or ClientId is not null)


--  or... 


-- CREATE TABLE dbo.MyTable (
--     OnSite BIT NOT NULL,
--     ClientID INT NULL);
-- ALTER TABLE dbo.MyTable WITH CHECK ADD CONSTRAINT CK_MyTable_ClientId_NotNull CHECK (OnSite=0 OR ClientId IS NOT NULL);
-- ALTER TABLE dbo.MyTable CHECK CONSTRAINT CK_MyTable_ClientId_NotNull;