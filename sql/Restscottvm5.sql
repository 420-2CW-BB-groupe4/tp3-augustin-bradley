BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTSCOTT',
 p_object => 'TP3_PRODUITS',
 p_object_type => 'TABLE',
 p_object_alias => 'produits' --seconde partie du URL
 );

 COMMIT;
END;