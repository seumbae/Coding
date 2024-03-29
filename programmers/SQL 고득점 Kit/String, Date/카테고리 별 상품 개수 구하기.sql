-- CASE 1: LEFT
SELECT LEFT(PRODUCT_CODE, 2) AS CATEGORY, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2)
ORDER BY CATEGORY

-- LEFT는 주어진 문자열에서 왼쪽에서부터 몇자리의 문자를 가져옴
-- 비슷한 함수로, RIGHT가 있으며 오른쪽에서부터 몇자리의 문자를 가져옴
-- MID는 SUBSTR, SUBSTRING과 동일하며 (문자, 시작 위치, 가져올 갯수)이다.

-- CASE 2: SUBSTR
SELECT SUBSTR(PRODUCT_CODE,1, 2) AS CATEGORY, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY CATEGORY
ORDER BY CATEGORY