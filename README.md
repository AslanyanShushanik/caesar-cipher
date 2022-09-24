# caesar-cipher-js

The following project is the implementation of the Caesar Cipher encryption technique in Javascript. 
<br />
The project takes as an input a text file and 2 flags: the size of the shift to make and a boolean representing whether we want to encode or decode the input text. The program encodes/ decodes only numbers, uppercase, and lowercase English letters. The shift can be done both ways, i.e., left and right. 

**Note: For the left side shift, the size flag should be a negative number and for the right a positive.**

<br />
The output is another file with encoded/ decoded text.
<br />
To encode the provided text run the following command with your choice of shift:
<br />

```  node main.js text.txt [shift-size] true ```

<br />

To decode the generated file back run:
<br />

```  node main.js generated-files/encoded.txt [same-shift-size] false ```
