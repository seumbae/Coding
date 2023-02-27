SELECT DISTINCT CITY
FROM STATION
WHERE LEFT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u') AND RIGHT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u')

SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP '^[aeiou].*[aeiou]$';

-- .은 문자하나를 나타내며, *는 0개 이상을 반복하는 것
-- ^는 시작, $는 끝을 가리킨다.
-- []안에 들어가있는 문자들 중 하나라도 포함되어 있다면 ok