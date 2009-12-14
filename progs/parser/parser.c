#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <err.h>

//#define TFILE "test_file.txt"
//#define offend_num 3

void file_manip(char tfile[], int offend_num);

int main(int argc, char *argv[])
{
  char tfile[50];
  int num;

  if((argv[1] == '\0') || (argv[2] ==  '\0'))
    {
      printf("Please supply a file of attacking ip's, and a maximum number of failing tries.\n");
      return(1);
    }	
  else
    {
      strcpy(tfile, argv[1]);
      num = atoi(argv[2]);
      printf("\nFile is set to %s, and offend_num is set to %d.\n", tfile, num);
    }

  file_manip(tfile, num);
  return(0);
}

void file_manip(char tfile[], int offend_num)
{
  FILE * fp = fopen( tfile, "r" );
  if ( fp == NULL )
    {
      err(1, "failed to open %s", tfile);
    }
  else
    {
      printf("%s successfully opened for reading\n", tfile);
    }

  ssize_t read;
  size_t len = 0;
  char * line = NULL;
  char array[30000][20];
  

  printf("Reading contents into ram: ");
  int i = 0;
  while ((read = getline(&line, &len, fp) != -1))
    {
      //printf("Line %d was %s", i, line);
      strcpy(array[i], line);
      i++;
    }
  printf("Done.\n\n");

  int count, loop_i;
  for (count = 0; count < i; count++)
    {
      printf("Array element %d is: %s", count, array[count]);
    } 

  int int_array[i];

  printf("\nComparing elements: ");  
  for (loop_i = 0; loop_i < i; loop_i++)
    {
      int match_num = 0;
      //printf("\n");
      for (count = 0; count < i; count++)
	{
	  if (!strcmp(array[loop_i], array[count]))
	    {
	      //printf("%d == %d\n", count, loop_i);
	      match_num++;
	    }
	  //else
	  //printf("%d != %d\n", count, loop_i);
	} 
      int_array[loop_i] = match_num;
    }
  printf("Done.\n\n");


  char fin_array[i][20];
  int fin_i = 0;
  for (loop_i = count = 0; count < i; count++)
    {
      if ( int_array[count] > offend_num )
	{
	  //printf("Element %d appeared %d times.\n", count, int_array[count]);
	  
	  int match_fin_array = 0;
	  int tmp_i;

	  for (tmp_i = 0; tmp_i < i; tmp_i++)
	    {
	      if (!strcmp(array[count], fin_array[tmp_i]))
		match_fin_array = 1;
	      
	      //printf("match: %d\n", match_fin_array);
	    }
	  
	  if (match_fin_array == 0)
	    {
	      strcpy(fin_array[fin_i], array[count]);
	      fin_i++;
	    }

	  //printf("fin_array[fin_i]: %s", fin_array[fin_i - 1]);
	  //printf("array[count]: %s", array[count]);

	  //printf("%s", array[count]);
	  loop_i++;
	}
    }

  if ( loop_i == 0 )
    printf("No offending elements present.\n");
  else
    {
      printf("These elements appear more than %d time(s): \n", offend_num);
      
      for (count = 0; count < fin_i; count++)
	printf("%s", fin_array[count]);
      //printf("TEST: %s", fin_array[0]);
    }

  //printf("TEST: %d\n", loop_i);

  fclose(fp);
}
