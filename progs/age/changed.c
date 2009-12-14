#include <stdio.h>
#include <stdlib.h>

#define FCFG "age.cfg"

void write_to_file( int cy, int cm, int cd ) {
	FILE * fcfg = fopen( FCFG, "w" );
	if( fcfg == NULL ) {
		err( 1, "failed to open " FCFG );
	}
	fprintf( fcfg, "%d %d %d\n", cy, cm, cd );
	fclose( fcfg );
}

char ynget() {
	char c;
	while ( 1 ) {	
		c = getchar();
		if( c == '\n') { continue; }
		if( c == '\r') { continue; }
		break;
	}
	return c;
}


int main()
{
	int cy,cd,cm;
	
	char c = 'n';	

	while ( c  == 'n') {

		//grab cy
		printf("\nEnter current year in the format of yyyy. ");
		scanf ("%d", &cy);

		//grab cm
		printf("\nEnter current month in the format of mm. ");
		scanf ("%d", &cm);

		//grab cd
		printf("\nEnter current year in the format of dd. ");
		scanf ("%d", &cd);

		//ask for check
		printf("\n%d/%d/%d is this correct? (y/n) " ,cm,cd,cy);
		c = ynget();
		if ( c == EOF ) { break; }
		if ( c == 'y') {
			write_to_file( cy, cm, cd );
			break;
		}
		if ( c == 'n') { continue; }
		printf( "\nYou typed \"%c\".\n", c );
	}
	
	return (0);
}
