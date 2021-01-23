import { Observable } from 'rxjs'; 
import { take } from 'rxjs/operators';

let origin = Observable.create((x) => x.next(100));
let processor = origin.pipe(take(1));
processor.subscribe((x) => console.log(x));