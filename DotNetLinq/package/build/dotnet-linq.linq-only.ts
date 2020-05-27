import { Linq, version } from '..'
if (typeof (window) != 'undefined') {
    (window as any).linqVersion = version;
    (window as any).linq = Linq;
}
Linq.enable();
