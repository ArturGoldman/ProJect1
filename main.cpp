#include <iostream>
using namespace std;
int main() {
    int p, k, n,  sum=0, swap=0, sum1=0;
    bool tru = false;
    cin>>p>>k>>n;
    int ang[n], c[n], r[n];
    for(int i=0; i<n; i++)
    {
        cin>>c[i]>>r[i];
        ang[i]=(c[i]-p)*r[i];
    }
    for (int i = 0 ; i < ( n - 1 ); i++)
    {
        for (int d = 0 ; d < n - i - 1; d++)
        {
            if (ang[d] > ang[d+1])
            {
                swap       = ang[d];
                ang[d]   = ang[d+1];
                ang[d+1] = swap;
                swap = c[d];
                c[d] = c[d+1];
                c[d+1]=swap;
                swap = r[d];
                r[d] = r[d+1];
                r[d+1]=swap;
            }
        }
    }

    for(int i=0; i<n; i++) {
        sum+=ang[i];
        if(sum<=k)
        {
            sum1+=c[i]-p;
        }else{
            sum-=ang[i];
            for(int q = 1;q<c[i]-p;q++)
            {
                sum+=(q*r[i]);
                if(sum>k)
                {
                    sum1=sum1+q-1;
                    tru = true;
                    break;
                }
                sum-=(q*r[i]);
            }
        }
        if(tru)
        {
            break;
        }
    }
    cout<<sum1;
    return 0;
}