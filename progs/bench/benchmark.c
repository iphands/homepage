#include <stdio.h>
#include <sys/types.h> 
#include <sys/wait.h> 
#include <unistd.h>



int main()
{
  int n,v;
  int child_status;
  
  for( n = 0; n < 10; n++ ) {
    pid_t child_pid = fork();
    if (child_pid < 0) {
      abort();
    }
    
    if (child_pid != 0) { continue;}					
    
    int i;
    for( i=0; i < 10; i++) {
     /* printf("\nout loop number %d\n",i); */
      
      int o;
      for( o=0; o < 40000000; o++) {
	/* printf("\n\tin loop number %d\n",o); */
      	v = 2;
	v * 2;
	v + 2;
	v / 2;
	}
      
    }
    
    _exit(0);
  }

  printf( "Waiting for children...\n" );
  {
    int child_pid;
    for( child_pid = 1; child_pid != -1; ) {
      child_pid = wait( &child_status );
      printf( "child done: %d\n", child_pid );
    }
  }
	printf("the var is %d\n", v );
  return 0;
}
