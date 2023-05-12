import math
from heapq import heappush, heappop

def dijkstra(dist, graph):
    heap = []
    
    heappush(heap, [0, 1]) #가중치, 노드
    while heap:
        cost, node = heappop(heap)
        if(dist[node] < cost): continue
        for newNode, weight in graph[node]:
            if cost+weight < dist[newNode]:
                dist[newNode] = cost+weight
                heappush(heap, [cost+weight, newNode])

def solution(n, road, k):
    dist = [math.inf] * (n+1)
    dist[1] = 0
    graph = [[]for _ in range(n+1)]
    
    for data in road:
        graph[data[0]].append([data[1], data[2]])
        graph[data[1]].append([data[0], data[2]])
    
    dijkstra(dist, graph)
    
    ans = 0
    for v in dist:
        if v <= k: ans += 1
    return ans