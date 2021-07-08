/* Spike Test: Used to simulate spike load for a short time 
- Sudden surge
- Automatic Recovery
             
            1400
         ----------   
        /          \
       /            \
  100 /              \        100
-----/                \---------------------------

*/

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1400 }, 
        { duration: '3m', target: 1400 },
        { duration: '10s', target: 100 }, 
        { duration: '3m', target: 100 },
        { duration: '10s', target: 0 }
      ],
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}




