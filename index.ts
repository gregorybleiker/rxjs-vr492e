import { of } from 'rxjs'; 
import { take } from 'rxjs/operators';

let origin = of(100);
let processor = origin.pipe(take(1));
processor.subscribe((x) => console.log(x));