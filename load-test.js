/* Load Test: Used to simulate concurrent users and requests per second
- Typical and peak load
- Standard Performance
             
                           100
         ----------------------------------------   
        /                                        \
       /                                          \
      /                                            \        
-----/                                              \------

*/

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 },         
      ],
      thresholds:{
          http_req_duration: ['p(99)<150'] // 99% of requests must complete below 150ms
      }
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}




