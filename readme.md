# Asynchronous

we pass them a function as an argumnet - a callback
that gets called when that task completes.
the call back has an argumnet that tells you wheter the
operation completed successfull

now we need to say what to do when fs.writeFile has 
completed (even if its nothing) and start checking for error