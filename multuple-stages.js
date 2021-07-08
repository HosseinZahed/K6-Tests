import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5s', target: 20 },
        { duration: '10s', target: 10 },
        { duration: '5s', target: 0 },
      ],
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
