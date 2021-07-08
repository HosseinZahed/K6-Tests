import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
