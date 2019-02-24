# notes
## 4. command line
use module optparse for command parsing
getopt is older
optparse is another

## signals
| signal name | number | default action | description |
| --- | --- | --- | --- |
| SIGHUP | 1 | Term | Some daemons interpret this as "re-read your configuration file" |
| SIGINT | 2 | Term | The signal sent by ^C on terminal |
| SIGTRAP | 5 | Core | Trace/breakpoint trap |
| SIGFPE | 8 | Core | Arithmetic error, e.g. divide by zero |
| SIGKILL | 9 | Term | Lethal signal, cannot be caught |
| SIGUSR1 | 10 | Term | For user-defined purposes | 
| SIGSEGV | 11 | Core | Invalid memory reference |
| SIGALRM | 14 | Term | Expiry of alarm clock timer | 
| SIGTERM | 15 | Term | Polite "please terminate" signal |

```
pkill -USR1 prime-v5.py
```

build dat file
```
gcc -o planets.dat planet-writer.c
```

