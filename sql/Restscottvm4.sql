BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTSCOTT',
 p_object => 'TP3_MAGASINS',
 p_object_type => 'TABLE',
 p_object_alias => 'magasins' --seconde partie du URL
 );

 COMMIT;
END;