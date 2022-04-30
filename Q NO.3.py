
def logic(n,m,a,b,c,d):
    if(n!=0):
        if (n>=m):      #if elevator is below us
            pure_walk=n*d   #pure walk
            walk=(n-m)*d+(b+c+a*m+b)    #walk then elevator
            wait=(n-m)*a+(b+c+n*a+b)    #wait for elevator and elevator
            return min(walk,wait,pure_walk)
        else:           #if elevator is above us.
            wait=(m-n)*a+(b+c+n*a+b)    #wait and then enter elevator
            walk=n*d                #we pure walk 
            return min(wait,walk)
    else:
        return 0

# Get the input
n,m,a,b,c,d = [int(x) for x in input().split()]
# Print output returned from the logic function
print(logic(n,m,a,b,c,d))