-- CASE 1
SELECT HISTORY_ID,
     ROUND((DATEDIFF(END_DATE, START_DATE) + 1) * DAILY_FEE * (
         CASE
            WHEN DATEDIFF(END_DATE, START_DATE)+1 < 7 THEN 1
            WHEN DATEDIFF(END_DATE, START_DATE)+1 < 30 THEN 0.95
            WHEN DATEDIFF(END_DATE, START_DATE)+1 < 90 THEN 0.92
            ELSE 0.85
            END
        ),0)
    AS FEE
FROM CAR_RENTAL_COMPANY_CAR CAR 
    JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY HISTORY
    ON CAR.CAR_ID = HISTORY.CAR_ID
WHERE CAR.CAR_TYPE = '트럭'
GROUP BY HISTORY_ID
ORDER BY FEE DESC, HISTORY_ID DESC

--CASE 2
WITH TMP AS (
    SELECT CAR_TYPE, DAILY_FEE, HISTORY_ID,
    DATEDIFF(END_DATE, START_DATE) + 1 AS PERIOD,
    CASE
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 90 THEN '90일 이상'
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30 THEN '30일 이상'
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 7 THEN '7일 이상'
        ELSE null
    END AS DURATION
    FROM CAR_RENTAL_COMPANY_CAR CAR
    JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY HISTORY
    ON CAR.CAR_ID = HISTORY.CAR_ID
    WHERE CAR_TYPE = '트럭'
)

SELECT HISTORY_ID, ROUND(DAILY_FEE * PERIOD * ((100-IFNULL(DISCOUNT_RATE, 0))/100),0) AS FEE
FROM TMP
LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN PLAN
ON TMP.CAR_TYPE = PLAN.CAR_TYPE AND TMP.DURATION = PLAN.DURATION_TYPE
ORDER BY FEE DESC, HISTORY_ID DESC

-- WITH는 가상 테이블을 만드는 함수,
-- 마지막에 LEFT JOIN을 사용하는 이유는 가상테이블 TMP에서 NULL값이 있기 때문에, (INNER)JOIN을 사용하게 되면
-- 교집합을 가져오는거라 NULL값을 가져오지 못함. -> null값은 7일 이하를 나타내기 때문에 필요한 레코드임
-- 그에따라서 IFNULL 함수를 이용하여 DISCOUNT_RATE를 가져오고, DISCOUNT_RATE가 NULL일 경우(DURATION 값이 NULL인 경우임) 0으로 치환하여 계산