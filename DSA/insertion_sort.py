A = [1,4,6,4,7,8,5]

def insertion_sort(A):
    for j in range(2,len(A)):
        key = A[j]
        i = j-1
        while i>0 and A[i]>key:     
            A[i+1] = A[i]
            i = i - 1
        A[i+1] = key    #insert key in the correct place
    return A

print(insertion_sort(A))