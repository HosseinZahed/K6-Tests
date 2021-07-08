/* Stress Test: Used to determin the limits of the system 
- Extreme conditions
- Capacity of the system
- Breaking point
- Automatic Recovery


                                  400
                              -----------                               
                        300  /           \
                     --------             \
             200    /                      \
           ---------                        \
   100    /                                  \
----------                                    \

*/

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 100 }, // 100 users for 2min
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 }, 
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 }, 
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 },
        { duration: '5m', target: 400 },
        { duration: '2m', target: 0 }
      ],
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
