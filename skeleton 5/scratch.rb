arr = [1,2,3,4,5,6]
def recSum(arr)
  return arr[0] if arr.length <=1
  return arr[0] + recSum(arr[1..-1])
end

p recSum(arr)