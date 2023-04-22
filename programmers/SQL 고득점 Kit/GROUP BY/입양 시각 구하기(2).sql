-- CASE 1
SET @hour = -1;
SELECT (@hour := @hour+1) AS HOUR,
    (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23
ORDER BY HOUR

-- CASE 2
WITH RECURSIVE CTE(HOUR) AS(
    SELECT 0 
    UNION
    SELECT HOUR+1 FROM CTE WHERE HOUR < 23
)

SELECT HOUR, COUNT(ANIMAL_OUTS.DATETIME) AS COUNT
FROM CTE LEFT JOIN ANIMAL_OUTS 
ON CTE.HOUR = HOUR(ANIMAL_OUTS.DATETIME)
GROUP BY HOUR