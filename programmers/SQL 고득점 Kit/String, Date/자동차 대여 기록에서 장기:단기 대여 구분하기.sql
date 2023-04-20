-- CASE 1: DATEDIFF
SELECT 
    HISTORY_ID, 
    CAR_ID, 
    DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE,
    DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
    IF(DATEDIFF(END_DATE, START_DATE) >= 29, '장기 대여', '단기 대여') as RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE DATE_FORMAT(START_DATE, '%Y-%m') = '2022-09'
ORDER BY HISTORY_ID DESC

-- CASE 2: DATEDIFF
SELECT HISTORY_ID, CAR_ID, 
    DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE, 
    DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
    CASE
        WHEN DATEDIFF(END_DATE, START_DATE)+1 >= 30
        THEN '장기 대여'
        ELSE '단기 대여'
        END AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY RENTAL
WHERE DATE_FORMAT(START_DATE, '%Y-%m') = '2022-09'
ORDER BY HISTORY_ID DESC

--CASE 3: TIMESTAMPDIFF
SELECT 
    HISTORY_ID, 
    CAR_ID, 
    DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE,
    DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
    IF(TIMESTAMPDIFF(DAY,START_DATE, END_DATE) >= 29, '장기 대여', '단기 대여') as RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE DATE_FORMAT(START_DATE, '%Y-%m') = '2022-09'
ORDER BY HISTORY_ID DESC

-- DATEDIFF는 exp1 - exp2를 통해 일수 차이를 반환
-- TIMESTAMPDIFF는 어떤 차이를 반환할지 설정할 수 있으며 expr2를 기준으로 expr1와의 차이를 반환한다.