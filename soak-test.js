/* Load Test: Used to validate realiability of the system over a long time
- Verify memory leaks
- Verify application restarts
- Verify resources under constant load (database/storage)
             
                                   400
         ----------------------------------------------------------   
        /                                                          \
       /                                                            \
      /                                                              \        
-----/                                                                \------

*/

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 400 },
        { duration: '3h56m', target: 400 }, // Stay there for about 4 hours
        { duration: '2m', target: 0 },         
      ]
}

export default function () {

  http.batch([
      ['GET', 'https://test.k6.io' ]
      //['GET', 'https://test.k6.io' ] Seconrd URL
      //['GET', 'https://test.k6.io' ] Third URL
  ]);

  sleep(1);
}




