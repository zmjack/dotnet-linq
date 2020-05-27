import { Linq, LinqSharp, version } from '..'
if (typeof (window) != 'undefined') {
    (window as any).linqVersion = version;
    (window as any).linq = Linq;
    (window as any).linqSharp = LinqSharp;
}
Linq.enable();
LinqSharp.enable();
