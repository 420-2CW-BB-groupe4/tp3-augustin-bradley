BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTSCOTT',
 p_object => 'TP3_DATES',
 p_object_type => 'TABLE',
 p_object_alias => 'dates' --seconde partie du URL
 );

 COMMIT;
END;