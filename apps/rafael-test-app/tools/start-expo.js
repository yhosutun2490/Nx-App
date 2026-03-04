if (process.stdout) {
  Object.defineProperty(process.stdout, 'isTTY', { value: true, configurable: true });
}
require('@expo/cli/build/bin/cli');
