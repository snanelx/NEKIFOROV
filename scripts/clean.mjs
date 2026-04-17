import { rmSync } from "node:fs";
import { resolve } from "node:path";

// Next.js static export on Windows can fail if old artifacts remain in out.
for (const directory of ["out", ".next"]) {
  rmSync(resolve(process.cwd(), directory), {
    force: true,
    recursive: true
  });
}
