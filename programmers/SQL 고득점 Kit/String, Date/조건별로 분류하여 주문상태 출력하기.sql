-- CASE 1
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE,'%Y-%m-%d') AS OUT_DATE,
    CASE
        WHEN OUT_DATE IS NULL THEN '출고미정'
        WHEN DATEDIFF('2022-05-01', OUT_DATE) < 0 THEN '출고대기'
        ELSE '출고완료'
        END AS 출고여부
FROM FOOD_ORDER
ORDER BY ORDER_ID

-- CASE 2
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE, '%Y-%m-%d') AS OUT_DATE,
IF(OUT_DATE <= '2022-05-01', '출고완료', IF(OUT_DATE IS NULL, '출고미정', '출고대기')) AS 출고여부
FROM FOOD_ORDER
ORDER BY ORDER_ID ASC