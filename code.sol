contract OrderToCashWorklist {
 struct Workitem {
 address instanceAddress ;
 uint elementIndex ;
 }

Workitem [] public workitems ;

 event ValidatePO_Requested ( uint workitemId , bytes32 sku , uint quantity , uint price );

 function ValidatePO_Start ( bytes32 sku , uint quantity , uint price ) external {
 workitems . push ( Workitem (msg .sender , 2));
 ValidatePO_Requested ( workitems . length - 1, sku , quantity , price );
 }

 function ValidatePO ( uint workitemId , uint decision ) external {
 require ( workitemId < workitems . length );
 require ( workitems [ workitemId ]. elementIndex == uint (2));
 require ( workitems [ workitemId ]. instanceAddress != address (0) );
 WorklistInterface ( workitems [ workitemId ]. instanceAddress ). ValidatePO_Complete ( decision
);
 workitems [ workitemId ]. instanceAddress = address (0);
 }
 ...
 }

 contract WorklistInterface {
 // == FUNCTIONS IN WORKLIST CONTRACT ==
 function ValidatePO_Start ( bytes32 sku , uint quantity , uint price ) external ;
 function ValidatePO ( uint workitemId , uint decision ) external ;
 // == FUNCTION IN MAIN CONTRACT ==
 function ValidatePO_Complete ( POStatus decision ) external ;
 ...
 }

 contract OrderToCashProcess {
 // == RESOURCE MANAGEMENT ==
 address worklist ;//工作列表地址
// == DATA FLOW PERSPECTIVE ==
 enum POStatus { PENDING , ACCEPTED , REJECTED , CANCELED , CLOSED }
 bytes32 sku ;
 uint quantity ;
 uint price ;
 POStatus status ;
 ...

 function ValidatePO_Complete ( POStatus decision ) external {
 require ( msg . sender == address ( worklist ) && /* Control flow validations */);
 require ( decision == POStatus . ACCEPTED || decision == POStatus . REJECTED );
 status = decision ;
 // Continues with the execution of next elements in the process flow
 }

 ...
 }