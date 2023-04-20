SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING 2 <= COUNT(*)
ORDER BY USER_ID, PRODUCT_ID DESC

-- 단순히 HAVING없이 GROUP BY만 쓴다면 distinct를 사용하는 것과 별반 차이가 없다.
-- 해당 칼럼의 중복을 제거하고 어떤 데이터가 있는지 보여주기 때문
-- 하지만, HAVING 조건절과 같이 사용된다면 특정 데이터가 몇개 있는지 (count), 특정 데이터들의 합은 얼만지(sum), 특정 데이터들의 평균은 몇인지 등을 알 수 있다.