import reanimatedJS from '../js-reanimated';
import { isMacos, shouldBeUseWeb } from '../PlatformChecker';
import { NativeReanimated } from './NativeReanimated';

let exportedModule;
if (shouldBeUseWeb() || isMacos()) {
  exportedModule = reanimatedJS;
} else {
  exportedModule = new NativeReanimated();
}

export default exportedModule as NativeReanimated;
